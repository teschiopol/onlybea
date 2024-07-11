import {ref} from "vue";
import axios from "axios";
import {ElementType} from "../types.ts";

const triggerLead = ref(false);

export function getTrigger()
{
    return triggerLead.value;
}

export function setTrigger()
{
    triggerLead.value = true;
}

function randomNumber()
{
    return Math.floor(Math.random() * 100) + 1;
}

export async function getPosts()
{
    let users = await getUsers();
    let res : ElementType[] = [];
    users.forEach(el => {
        res.push({
            username: el.username,
            posts: randomNumber()
        });
    });
    return res;
}

async function getUsers() {
    let res : any[] = [];
    await axios('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            res = response.data;
        });
    return res;
}

export async function signInWithEmail(email : string)
{
    let users = await getUsers();
    return users.some(el => el.email === email);
}
