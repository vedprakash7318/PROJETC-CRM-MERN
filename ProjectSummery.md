Software :-  CRM :- 

backend:- ExpressJs nodemailer,mongoose(altas),jwt
Client Relationship Management System
    Panel :-   
               Supper Admin
               Admin 
               Employee
    Supper Admin:- Supper Admin Login
                   Admin Create 
                   Admin Show :- View Full Details ,Block
    Admin Panel :- Admin Login :- 
                   Add Employee
                   Add Leads   (Single Lead, Multiple Leads (excel upload))
                   Delete (Status:- delete)
                   View All
                   View Single full details 
                   Assign Lead:-  Employee 
            Global Setting :- Priority
                              Service 
                              Status
    Employee Panel:- 
                    Login
                    lead:- call Note view 
                            note:- text , status, service save 
                            filter:- searching, status, service
                    Negative leads:- 
                    Closed Leads :-  
                    Reminders :- Today
                    Missed Leads   

---------------------------------------------------------------------
Api's

Login api :- 
    Name 
    Email    
    number   
    Password  ['employee'] 
    Role    ['supper admin','admin','employee']
    status   default:- Active
Show :- admin 
        employee
Block :- 
        findbyIdAndUpdate()  block
        Amdin Id then also block employee related to him 
Unblock

----------------Leads------------------

Add Leads:- 
        number  (required)
        name
        email
        city
        service
        priority
        status
        assignedTo
        assigndBy
        AddedBy
Followup:-
    text
    status
    priority
    service
    nextFollowupDate
    leadId


----------------UI--------------------

React Js Full Component Based


Login Page :- email, password
Dashboard  :- 
         Admin:- [dashboard,add employee, add status, add priority, add service, add lead]
         Employee :- [add leads, total leads, negative leads , reminders, dashboard]
         Supper Admin :-  [Add Admin , total admin]



-----------------------Folder----------------------------
Backend

    Controller
    Models
    Routes
    Middleware
    Config
    .env
    index.js

Frontend
    public
    src
        Components
            CSS
            Comp1.jsx
            Comp2.jsx
        Pages
            CSS
            page1.jsx
            page2.jsx
        Features
            feature
        Redux
          store



login page 
Dashboard




--------------------------------Start from supper admin-----------------------------

Production deploye :- 
                    api 
                    end point
                    http:localhost:3000/api/supperadmin/login
                    .env
                    nodemon
                    dotenv
                    cors
                    mongoose
                    express
                    jsonwebtoken (jwt)
                    atlas



----------------------JWT-----------------------

SECRAETE KEY :- 

PAYLOAD

TOKEN :-  

JWT.SIGN(PAYLOAD,SECRATE)

JWT.VERIFY(TOKEN)



--------------------------------------------------------

Dynamic Dashboard :-

supper_admin

Dashboard   /main-page
Add Admin  /add-admin
Manage Admin  /manage-admin


Admin

Dashboard  /admin-dashboard
Leads :-  /leads
Priority :- /priority
.
.
.
.


Employee 

Dashboard   /  employee-dashboard
leads :-  employee-leads
closed-lead   /closed-lead
.
.
.
.




Pages
Folder :- Supper Admin   Supperdashboard    City , State,Country, admin, manageAdmin
Folder :- Admin         AdminDashboard      Leads , Priority , Status, Source, tag, Services
Folder :- Employee       EmployeeDashboard   leads, closedLeads, NegativeLeads, Reminder