import axios from 'axios';



/*
POST “/add” – create new task

{
“Title”:””,
“Description”:””
}


POST “/edit” – upd task
{
“ID”:””,
“Title”:””,
“Description”:””
}


DELETE “/delete” – remove task
{
“ID”:””
}

GET “/tasks” – get task’s list (return 10 last tasks)
Response:
{
[
{
“ID”:””,
“Title”:””,
“Description”:””,
“Data”: “”,
“Checked”:bool
},
{
“ID”:””,
“Title”:””,
“Description”:””,
“Data”: “”,
“Checked”:bool
},
{
“ID”:””,
“Title”:””,
“Description”:””,
“Data”: “”,
“Checked”:bool
}
]
}
 POST “/task” – get 1 task
Request:
{
“ID”
}
Response:
{
“ID”:””,
“Title”:””,
“Description”:””,
“Data”: “”,
“Checked”:bool
}

*/