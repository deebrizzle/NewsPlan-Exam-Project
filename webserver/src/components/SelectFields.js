import BasicSelect from './BasicSelect';
import { useEffect, useState } from "react";
import { getSections } from '../database/Sections';
import { getUsers, getUsersFromSection } from '../database/Users';

export function SelectSection() {

    //TODO Query sections from the database for scaleability?

    const sections = [
        {objectId: 's1', name: 'Foreign Affairs'},
        {objectId: 's2', name: 'Financial'}
    ]

    return BasicSelect(sections, "Section")
};

export function SelectSource() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      getUsers().then((users) => {
        setEmployees(users);
      });
    }, []);
    
    let sources = [] = employees.map((employee) => {
        return {
            objectId: employee.id,
            name: employee.get("username"),
            section: employee.get("section")
        }
    })

    return BasicSelect(sources, "Source")
};


export function SelectVisibilities() {

    const visibilities = [
        {objectId: 'v1', name: 'Only myself'},
        {objectId: 'v2', name: 'Chief Editor'},
        {objectId: 'v3', name: 'Section Staff'},
        {objectId: 'v4', name: 'Everyone'}
    ]
    
    return BasicSelect(visibilities, "Visibility")
};

export function SelectArticles() {

    const articles = [];
    return BasicSelect(articles, "Articles")
};