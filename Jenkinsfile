pipeline {
    agent any

    stages {
        stage('Pull') {
            steps {
                git([url:'https://github.com/wiwiii/node-counter/', branch:'master'])
            }
        }
        stage('Build') {
            steps {
                bat 'docker build -t "node-counter" .'
            }
        }
		stage('Run') {
            steps {
                bat 'docker run -p 127.0.0.1:3000:3000/tcp node-counter'
            }
        }
    }
}