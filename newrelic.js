'use strict';

exports.config = {
  app_name: ['Reviews'],
  license_key: '5a5ff29e2520e988c54b5f48abc9f85c3ab3b39e',
  logging: {
    level: 'trace',
    filepath: '../../../newrelic_agent.log'
  },
  utilization: {
    detect_aws: false,
    detect_pcf: false,
    detect_azure: false,
    detect_gcp: false,
    detect_docker: false
  },
  transaction_tracer: {
    enabled: true
  }
};
