pipeline
       {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch:'dev',
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

        stage('Build Project'){
            steps{
                sh 'npm run build'
            }
        }
    }
       }
