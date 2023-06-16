## 1. Installation
Inorder to get started with starship, one needs to install the following
* `kubectl`: https://kubernetes.io/docs/tasks/tools/
* `kind`: https://kind.sigs.k8s.io/docs/user/quick-start/#installation
* `helm`: https://helm.sh/docs/intro/install/
* `yq`: https://github.com/mikefarah/yq/#install

Note: To make the process easy we have a simple command that will try and install dependencies
so that you dont have to.

```bash
npm run e2e:deps
```
This command will 
* check (and install) if your system has all the dependencies needed to run the e2e tests wtih Starship
* fetch the helm charts for Starship

## 2. Connect to a kubernetes cluster
Inorder to set up the infrastructure, for Starship, we need access to a kubernetes cluster.
One can either perform connect to a 
* remote cluster in a managed kubernetes service
* use kubernetes desktop to spin up a cluster
* use kind to create a local cluster on local machine

To make this easier we have a handy command which will create a local kind cluster and give you access
to a kubernetes cluster locally.

NOTE: Resources constraint on local machine will affect the performance of Starship spinup time

```bash
npm run e2e:kind
```

Run the following command to check connection to a k8s cluster
```bash
kubectl get pods
```

## 3. Start Starship
Now with the dependencies and a kubernetes cluster in handy, we can proceed with creating the mini-cosmos ecosystem

Run
```bash
npm run e2e:start
```

We use the config file `configs/config.yaml` as the genesis file to define the topology of the e2e test infra. Change it as required

Note: Spinup will take some time, while you wait for the system, can check the progress in another tab with `kubectl get pods`

## 4. Run the tests
We have everything we need, our desired infrastructure is now running as intended, now we can run
our end-to-end tests.

Run
```bash
npm run e2e:test
```

## 5. Stop the infra
The tests should be ideompotent, so the tests can be run multiple times (which is recommeded), since the time to spinup is still high (around 5 to 10 mins).

Once the state of the mini-cosmos is corrupted, you can stop the deployments with
```bash
npm run e2e:stop
```
Which will
* Stop port-forwarding the traffic to your local
* Delete all the helm charts deployed

## 6. Cleanup kind (optional)
If you are using kind for your kubernetes cluster, you can delete it with
```bash
npm run e2e:clean
```
