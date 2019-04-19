pipeline {
    agent any
    environment {
        aws_access_key = credentials('aws_access_key')
        aws_secret_key = credentials('aws_secret_key')
    }
    stages {
        stage('Docker container run') {
            steps {
                sh 'sudo docker run -v "$PWD":/root builddep bash /root/install.sh'
            }
        }
        stage('Configure packer.json') {
            steps {
                sh '''
                    deb_name=$(ls *.deb)
                    sed -i "s/built_deb/${deb_name}/g" packer.json
                '''
            }
        }
        stage('Packer') {
            steps {
                sh 'packer build -machine-readable -var aws_access_key=${aws_access_key} -var aws_secret_key=${aws_secret_key} packer.json'
            }
        }
    }
    post {
        success {
            archiveArtifacts 'manifest.json'
        }
    }
}