# jobrm
Keep track of job applications

# minikube 

`minikube start --vm-driver=hyperv --hyperv-virtual-switch=Minikube`

1. Powershell: `"minikube mount $($pwd.Path):/code/jobrm" | Invoke-Expression`
1. CMD: `minikube mount %cd%:/code/jobrm`
1. Bash: `minikube mount $(pwd):/code/jobrm`

# jenkins

`helm install --name jenkins --values ./kubernetes/jenkins-helm-values.yaml stable/jenkins`
