pipeline
       {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch:'prod',
                url:'https://github.com/Vimalraj-7202/Jenkins2Docker.git'
            }
        }
            stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
            }

        stage('Execute test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins2docker:v1 .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
            docker rm -f react-app || true
            docker run -d --name react-app -p 3001:80 jenkins2docker:v1
        '''
            }
        }
    }
       }
