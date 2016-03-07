# fablab
Site de gestion du FabLab de CentraleLille

## Installation

Install dependencies:

```
composer install
npm install -g bower
bower install
```

Bower will install bootstrap for layout.

## Configure database and load Data Fixtures
```
php app/console doctrine:database:drop --force
php app/console doctrine:database:create
php app/console doctrine:schema:create
php app/console doctrine:fixtures:load
```

## Roles et control access

##### 4 rôles :
- Rôle de type normal (scope = tout le site) :
  - **ROLE_ADMIN** : Permet d'accéder à tout et d'effectuer toutes les actions
  - **ROLE_USER** : Permet de voir les projets (rôle par défaut lorsqu'on possède un compte)
- Rôle de type projet (scope = projet) :
  - **PROJECT_MEMBER** : Permet d'accéder aux parties privées de la page projet (rôle par défaut lorsqu'on est membre du projet)
  - **PROJECT_LEADER** : Permet d'effectuer des actions supplémentaires dans les pages privées du projet

##### Liste de l'ensemble des utilisateurs, leurs projets et leurs rôles
URL : /users

##### Restreindre l'accès des pages privées du projet aux membres

Il suffit d'ajouter deux lignes de code du controlleur
Ex : ProjectController

```
    /**
     * @Route("/edit/{projectId}", name="project_edit")
     * @param $projectId
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function editAction($projectId)
    {
        ...

        /**
         * Control access for members only
         */
        $this->denyAccessUnlessGranted(ProjectRole::project_role_member, $project);

        return $this->render(
            'CustomFosUserBundle:Project:show.html.twig',
            array(
                'project' => $project,
                'currentUser' => $currentUser
            )
        );
    }
```

##### Ajouter un contrôle supplémentaire dans les pages twig pour le PROJECT_LEADER
Il suffit d'ajouter dans le template la ligne suivante:

```
{% if currentUser.hasRoleWithinProject(constant('\\CentraleLille\\CustomFosUserBundle\\Entity\\ProjectRole::project_role_leader'), project) %}
    <p>This part is visible only by the PROJECT_LEADER</p>
{% endif %}
```