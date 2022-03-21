pipeline {
    agent any
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Preparing K6...'
                sh 'chmod +x ${FOLDER}/setup_k6_deps.sh'
                sh 'chmod +x ${FOLDER}/run.sh'
                sh '${FOLDER}/setup_k6_deps.sh'
                sh 'npm --prefix ${FOLDER} install'
                sh 'npm --prefix ${FOLDER} run bundle'

                echo 'Running K6 performance tests...'
                sh '${FOLDER}/run.sh'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}

