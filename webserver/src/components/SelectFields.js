import BasicSelect from './BasicSelect';
import { useEffect, useState } from "react";
import { getSections } from '../database/Sections';
import { getUsers, getUsersFromSection } from '../database/Users';

export function SelectSection({ handleCallBackSelection }) {

    //TODO Query sections from the database for scaleability?

    const sections = [
        {objectId: 's1', name: 'Foreign Affairs'},
        {objectId: 's2', name: 'Financial'}
    ]

    return (
      <BasicSelect
        arrayOfOptions={sections} label="Section" handleCallBackSelection={handleCallBackSelection} />
    );
};

export function SelectSource({ handleCallBackSelection }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers().then((users) => {
        setUsers(users);
      });
    }, []);
    
    const sources = [] = users.map((employee) => {
        return {
            objectId: employee.id,
            name: employee.get("username"),
            section: employee.get("section")
        }
    })

    return (
      <BasicSelect arrayOfOptions={sources} label="Source" handleCallBackSelection={handleCallBackSelection} />
    );
};

export function SelectArticles({ handleCallBackSelection }) {

    const articles = [];
    return (
      <BasicSelect arrayOfOptions={articles} label="Articles" handleCallBackSelection={handleCallBackSelection} />
    );

};

export function SelectVisibilities({ handleCallBackSelection }) {

  const visibilities = [
    {objectId: 'v1', name: 'Only myself'},
    {objectId: 'v2', name: 'Chief Editor'},
    {objectId: 'v3', name: 'Section Staff'},
    {objectId: 'v4', name: 'Everyone'}
  ]

  return (
    <BasicSelect arrayOfOptions={visibilities} label="Articles" handleCallBackSelection={handleCallBackSelection} />
  );
}
