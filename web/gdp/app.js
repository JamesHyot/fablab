!function e(t,n,a){function r(i,o){if(!n[i]){if(!t[i]){var d="function"==typeof require&&require;if(!o&&d)return d(i,!0);if(s)return s(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};t[i][0].call(u.exports,function(e){var n=t[i][1][e];return r(n?n:e)},u,u.exports,e,t,n,a)}return n[i].exports}for(var s="function"==typeof require&&require,i=0;i<a.length;i++)r(a[i]);return r}({1:[function(e,t,n){},{}],2:[function(e,t,n){function a(){var e=["appGDP.routerModule","appGDP.uiModule"];window.appCentralink=angular.module("appGDP",e),angular.bootstrap(document,["appGDP"])}e("fs"),e("./gdp-ui/_index"),e("./ui-router/_index"),angular.element(document).ready(a)},{"./gdp-ui/_index":3,"./ui-router/_index":12,fs:1}],3:[function(e,t,n){t.exports=angular.module("appGDP.uiModule",["ui.bootstrap","ngSanitize","toastr","draganddrop"]),{directives:{"datepicker.directive":e("./directives/datepicker.directive.js"),"draggable.directive":e("./directives/draggable.directive.js"),"droppable.directive":e("./directives/droppable.directive.js"),"editTask.directive":e("./directives/editTask.directive.js"),"newTask.directive":e("./directives/newTask.directive.js")},"planning.controller":e("./planning.controller.js"),"requester.service":e("./requester.service.js"),"task.controller":e("./task.controller.js")}},{"./directives/datepicker.directive.js":4,"./directives/draggable.directive.js":5,"./directives/droppable.directive.js":6,"./directives/editTask.directive.js":7,"./directives/newTask.directive.js":8,"./planning.controller.js":9,"./requester.service.js":10,"./task.controller.js":11}],4:[function(e,t,n){function a(){return{restrict:"EA",templateUrl:s+"views/datepicker.html",link:function(e,t,n){function a(t){e.currentDate.addMonths(t),i()}function r(){for(var e=Date.today().monday(),t=[],n=0;n++<7;)t.push(e.toString("dddd").slice(0,2)),e.addDays(1);return t}function s(t){t.getMonth()<e.currentDate.getMonth()?a(-1):t.getMonth()>e.currentDate.getMonth()&&a(1),e.selectedDay=angular.copy(t),e.$parent.selectedDay=angular.copy(t),e.dateSelection=!1}function i(){e.currentDate||(e.currentDate=Date.today());var t=e.currentDate.moveToFirstDayOfMonth(),n=new Array(Date.getDaysInMonth(e.currentDate.getFullYear(),e.currentDate.getMonth())).length;n+=n%7==0?0:7-n%7;var a=[],r=angular.copy(t).addDays(1).getDay()-1;-1==r&&(r=6);var s=angular.copy(t).addDays(-r);n+=e.currentDate.getMonth()==angular.copy(s).addDays(n+1).getMonth()?7:0;for(var i=0;i++<n;)s.addDays(1),a.push(angular.copy(s));e.days=a}e.shiftMonth=a,e.pick=s,e.getDays=r,e.currentDate=null,e.dateSelection=!1,e.days=[],e.max=null!=n.max?Date.today().addDays(parseInt(n.max-1)):null,e.min=void 0!=n.min?Date.today().addDays(parseInt(n.min)):null,e.today=Date.today(),function(){i(),r()}()}}}var r=e("../_index"),s=document.location.origin+"/gdp/";r.directive("datePick",a)},{"../_index":3}],5:[function(e,t,n){function a(){return function(e,t){var n=t[0];n.draggable=!0,n.addEventListener("dragstart",function(e){return e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("Text",this.id),this.classList.add("drag"),!1},!1),n.addEventListener("dragend",function(e){return this.classList.remove("drag"),!1},!1)}}var r=e("../_index");r.directive("draggable",a)},{"../_index":3}],6:[function(e,t,n){function a(){return{scope:{drop:"&",target:"&",bin:"="},link:function(e,t){var n=t[0];n.addEventListener("dragover",function(t){t.dataTransfer.dropEffect="move",t.preventDefault&&t.preventDefault();var n=t.target.attributes.socket;return console.log(t),n&&n.value==e.gem&&console.log("ok"),this.classList.add("over"),!1},!1),n.addEventListener("dragenter",function(e){return this.classList.add("over"),!1},!1),n.addEventListener("dragleave",function(e){return this.classList.remove("over"),!1},!1),n.addEventListener("drop",function(t){t.stopPropagation&&t.stopPropagation(),this.classList.remove("over");var n=this.id,a=document.getElementById(t.dataTransfer.getData("Text"));return this.appendChild(a),e.$apply(function(e){var t=e.drop();"undefined"!=typeof t&&t(a.id,n)}),!1},!1)}}}var r=e("../_index");r.directive("droppable",a)},{"../_index":3}],7:[function(e,t,n){function a(){return{restrict:"E",templateUrl:s+"views/tasks/edit-task.html"}}var r=e("../_index"),s=document.location.origin+"/gdp/";r.directive("editTask",a)},{"../_index":3}],8:[function(e,t,n){function a(){return{restrict:"E",templateUrl:s+"views/tasks/new-task.html"}}var r=e("../_index"),s=document.location.origin+"/gdp/";r.directive("newTask",a)},{"../_index":3}],9:[function(e,t,n){function a(e,t,n){function a(t){e.currentDate.addMonths(t),o()}function r(n){t.getProjects(function(t){e.currentProject=t.data[0],e.userProjects=t.data,n&&n()})}function s(){t.getTasks(e.currentProject.id,function(t){for(var n in t.data){var a=new Date(t.data[n].end_date);e.tasks[a]||(e.tasks[a]=[]),e.tasks[a].push(t.data[n])}d(0)})}function i(){for(var e=Date.today().monday(),t=[],n=0;n++<7;)t.push(e.toString("dddd").slice(0,2)),e.addDays(1);return t}function o(){e.currentDate||(e.currentDate=Date.today());var t=e.currentDate.moveToFirstDayOfMonth(),n=new Array(Date.getDaysInMonth(e.currentDate.getFullYear(),e.currentDate.getMonth())).length;n+=n%7==0?0:7-n%7;var a=[],r=angular.copy(t).addDays(1).getDay()-1;-1==r&&(r=6);var s=angular.copy(t).addDays(-r);n+=e.currentDate.getMonth()==angular.copy(s).addDays(n+1).getMonth()?7:0;for(var i=0;i++<n;)s.addDays(1),s.toString()==Date.today().toString()&&(e.startWeek=Math.floor(i/7)),a.push(angular.copy(s));e.days=a}function d(t){if(t)if(e.currentWeek+t<0){var n=e.days[0].getDate();a(-1);var r=Math.floor((e.days.length-1)/7)-1;e.currentWeek=n==e.days.length-7?r-1:r}else if(e.days.length<7*(e.currentWeek+1+t)){var n=e.days[e.days.length-7].getDate();a(1),e.currentWeek=e.days[0].getDate()==n?1:0}else e.currentWeek+=t;else e.currentWeek=e.startWeek;var s=e.currentWeek;e.daysWeek=[];for(var i=7*s;7*(s+1)>i;i++)e.daysWeek[i-7*s]=e.days[i];return!0}e.tasks={},e.shiftMonth=a,e.getDays=i,e.processWeek=d,e.currentDate=null,e.dateSelection=!1,e.days=[],e.startWeek=0,e.daysWeek=[],e.currentWeek=0,e.today=Date.today(),e.getDays=i,e.currentProject={},function(){console.log("test"),t.init(),r(function(){s(),o()})}()}var r=e("./_index");r.controller("planningController",["$scope","rq","toastr",a])},{"./_index":3}],10:[function(e,t,n){function a(e,t){function n(t,n){e.get(t).then(n,y)}function a(t,n,a){e.post(t,n).then(a,y)}function r(t,n,a){e.put(t,n).then(a,y)}function s(t,n){e["delete"](t).then(n,y)}function i(e,t){return{login:"/api/login_check",tasks:"/gdp/api/projects/"+e+"/tasks",taskEdit:"/gdp/api/tasks/"+e,listCreate:"/gdp/api/lists",lists:"/gdp/api/projects/"+e+"/lists",deleteTask:"/gdp/api/tasks/"+e,users:"/gdp/api/projects/"+e+"/users",projects:"/gdp/api/users/project",assignTask:"/gdp/api/tasks/"+e+"/users/"+t,taskListAdd:"/gdp/api/lists/"+e+"/adds/"+t,taskListDelete:"/gdp/api/lists/"+e}}function o(){JWTTOKEN&&(e.defaults.headers.common.Authorization="Bearer "+JWTTOKEN)}function d(e,t){var a=new i(e);n(a.users,t)}function c(e){var t=new i(null);n(t.projects,e)}function u(e,t,n){var r=new i(e);a(r.tasks,t,n)}function l(e,t){var a=new i(e);n(a.tasks,t)}function f(e,t){var n=new i(e);s(n.deleteTask,t)}function p(e,t,n){var a=new i(e);r(a.taskEdit,t,n)}function g(e,t,n){var a=new i(e,t);r(a.assignTask,{},n)}function k(e,t){var n=new i(null);a(n.listCreate,e,t)}function v(e,t){var a=new i(e);n(a.lists,t)}function D(e,t,n){var a=new i(e,t);r(a.taskListAdd,{},n)}function T(e,t){var n=new i(e);s(n.taskListDelete,t)}function y(e){console.log(e),t.error(["Erreur:",e].join(" "))}var h={init:o,createTask:u,getTasks:l,deleteTask:f,getUsers:d,getProjects:c,assignTaskToUser:g,getTaskLists:v,createTaskList:k,getTaskLists:v,addTaskToList:D,deleteTaskList:T,saveEditTask:p};return h}var r=e("./_index");r.factory("rq",["$http","toastr",a])},{"./_index":3}],11:[function(e,t,n){function a(e,t,n){function a(t){t.preventDefault(),t.stopPropagation(),e.status.isopen=!e.status.isopen}function r(){e.showTaskListDelete||e.showTaskCreated?(e.showTaskListDelete=!1,e.showTaskCreated=!1):e.showTaskListDelete=!0}function s(t,n){e.editTask=t,e.taskEdit[n.id]=!0,e.selectedDay=new Date(t.end_date)}function i(){e.editTask.endDate=e.selectedDay.toString(),t.saveEditTask(e.editTask.id,e.editTask,function(t){e.editTask={},e.taskEdit={},e.selectedDay=Date.today(),v()})}function o(t,n){t.preventDefault(),e.editTask={},e.selectedDay=Date.today(),e.taskEdit[n.id]=!1,e.taskEdit={}}function d(a){e.newTask.endDate=e.selectedDay.toString(),e.newTask.taskList=a,t.createTask(e.currentProject.id,e.newTask,function(){n.success(["Tâche",e.newTask.title,"créée!"].join(" ")),e.newTask={title:"",body:"",endDate:""},v()})}function c(e,a){t.deleteTask(e,function(e){n.success(["Task",a,"has been removed."].join(" ")),v()})}function u(e,n){e=e["json/task"],e&&t.addTaskToList(n.id,e.id,function(e){v()})}function l(){t.getUsers(e.currentProject.id,function(t){e.projectUsers=t.data})}function f(n){t.getProjects(function(t){e.currentProject=t.data[0],e.userProjects=t.data,n&&n()})}function p(e,n){t.assignTaskToUser(e,n,function(e){v()})}function g(){var a={name:e.newTaskListName,project_id:e.currentProject.id};t.createTaskList(a,function(t){n.success(["Liste de tâches",a.name,"créée."].join(" ")),e.newTaskListName="",v()})}function k(e){t.deleteTaskList(e,function(e){n.success("Liste de tâches supprimée."),v()})}function v(){t.getTaskLists(e.currentProject.id,function(t){e.taskLists=t.data})}e.newTask={title:"",body:"",endDate:""},e.taskLists=[],e.projectUsers=[],e.currentProject={},e.editTask={},e.userProjects=[],e.newTaskListName="",e.showTaskListDelete=!1,e.showTaskCreated=!1,e.taskEdit={},e.selectedDay=Date.today(),e.status={isopen:!1},e.createTask=d,e.deleteTask=c,e.onDropTaskInList=u,e.assignTaskToUser=p,e.createTaskList=g,e.deleteTaskList=k,e.doCancelButton=r,e.setTaskEdit=s,e.saveEditTask=i,e.toggleDropdown=a,e.cancelEditTask=o,function(){t.init(),f(function(){v(),l()})}()}var r=e("./_index");r.controller("taskController",["$scope","rq","toastr",a])},{"./_index":3}],12:[function(e,t,n){t.exports=angular.module("appGDP.routerModule",["ui.router","ngCookies"]),{"router.config":e("./router.config.js")}},{"./router.config.js":13}],13:[function(e,t,n){function a(e,t){e.state("tasks",{url:"/tasks",templateUrl:s+"views/tasks/tasks.html",controller:"taskController",data:{access:"user"}}).state("planning",{url:"/planning",templateUrl:s+"views/planning/planning.html",controller:"planningController",data:{access:"user"}}),t.otherwise("/tasks")}a.$inject=["$stateProvider","$urlRouterProvider"];var r=e("./_index"),s=document.location.origin+"/gdp/";r.config(a)},{"./_index":12}]},{},[2]);