package datastore

import (
	"github.com/SUSE/stratos-ui/components/app-core/backend/config"
	"encoding/json"
	log "github.com/Sirupsen/logrus"
	"strconv"
	"strings"
)

const (
	SERVICES_ENV = "VCAP_SERVICES"
)

type VCAPService struct {
	Credentials VCAPCredential `json:"credentials"`
}

type VCAPCredential struct {
	Username                string `json:"username"`
	Password                string `json:"password"`
	Dbname                	string `json:"dbname"`
	Hostname                string `json:"hostname"`
	Port                    string `json:"port"`
	Uri 					string `json:"uri"`
}

// Discover cf db services via their 'uri' env var and apply settings to the DatabaseConfig objects
func ParseCFEnvs(db *DatabaseConfig) (bool){
	if (config.IsSet(SERVICES_ENV) == false) {
		return false;
	}

	// Extract struts from VCAP_SERVICES env
	vcapServicesStr := config.GetString(SERVICES_ENV)
	var vcapServices map[string][]VCAPService
	err := json.Unmarshal([]byte(vcapServicesStr), &vcapServices)
	if err != nil {
		log.Warnf("Unable to convert %s env var into JSON", SERVICES_ENV)
		return false;
	}

	for _, services := range vcapServices {
		if (len(services) == 0) {
			continue
		}
		service := services[0]

		dbCredentials := service.Credentials

		if strings.HasPrefix(dbCredentials.Uri, "postgres") {
			// At the moment we only handle Postgres
			db.DatabaseProvider = "pgsql"
			db.Username = dbCredentials.Username
			db.Password = dbCredentials.Password
			db.Database = dbCredentials.Dbname
			db.Host = dbCredentials.Hostname
			db.Port, err = strconv.Atoi(dbCredentials.Port)
			db.SSLMode = "disable"
			log.Info("Discovered Cloud Foundry postgres service and applied config")
			return true
		}
	}

	return false;
}
