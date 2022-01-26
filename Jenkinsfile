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
    }
}