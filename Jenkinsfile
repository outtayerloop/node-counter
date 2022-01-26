pipeline {
    agent any

    stages {
        stage('Pull') {
            steps {
                git([url:'https://github.com/wiwiii/node-counter', branch:'master'])
            }
        }
    }
}