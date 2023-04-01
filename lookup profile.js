var contacts=[
    {
        "firstName": "Akila",
        "lastName": "Laine",
        "number": "0123456789",
        "likes": ["pizza","coding","Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0655237491",
        "likes":["Hogwarts","Magic","Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487293801",
        "likes":["Intriguing Cases","Violin"]
    },
    {
        "firstName": "Krish",
        "lastName": "Bhavan",
        "number": "unknown",
        "likes":["JavaScript","Gaming","foxes"]
    }
];

function LookUp(name,prop)
{
    for(var i=0;i<contacts.length;i++)
    {
        if(contacts[i].firstName===name)
        {
            return contacts[i][prop] || "No such Property";
        }
    }
    return "No such contact";
}
var data=LookUp("Akila","likes");

console.log(data);

var data=LookUp("Shirlock","lastName");

console.log(data);
