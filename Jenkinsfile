pipeline {
    agent any
    tools {
        packer 'Packer 1.2.2' 
    }
    environment {
        aws_access_key = credentials('aws_access_key')
        aws_secret_key = credentials('aws_secret_key')
    }
    stages {
        stage('Initialize workspace') {
            steps {
                deleteDir()
            }
        }
        // stage('Git clone') {
        //     steps {
        //         git 'https://github.com/aboutflying/node-demo-app.git'
        //     }
        // }
        stage('Docker container run') {
            steps {
                sh 'sudo docker run -v "$PWD":/root builddep bash /root/install.sh'
            }
        }
        // stage('Aptly repo add') {
        //     steps {
        //         sh 'aptly repo add -force-replace release *.deb'
        //     }
        // }
        // stage('Aptly publish repo') {
        //     steps {
        //         sh 'aptly publish repo -skip-signing=true release s3:spinnaker-debian-repo-bill: || true'
        //     }
        // }
        // stage('Aptly publish update') {
        //     steps {
        //         sh 'aptly publish update -force-overwrite -skip-signing=true xenial s3:spinnaker-debian-repo-bill:'
        //     }
        // }
        stage('Packer') {
            steps {
                sh 'packer build -machine-readable -var aws_access_key=${aws_access_key} -var aws_secret_key=${aws_secret_key} packer.json'
            }
        }
    }
    post {
        success {
            archiveArtifacts '*.json'
        }
    }
}