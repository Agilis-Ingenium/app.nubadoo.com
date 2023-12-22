# building docker images 
build-ci-env:
 docker-compose -f docker-compose.ci.yml build

# starting docker-compose  
start-ci-env:
 docker-compose -f docker-compose.ci.yml up -d

# start selenium test inside of the container 
start-ci-test:
 docker-compose -f docker-compose.ci.yml exec -T selenium-host sh bin/run.sh

# stop environment  
stop-ci-env:
 docker-compose -f docker-compose.ci.yml down