import BasicSelect from './BasicSelect';

const options = ["Financial", "Foreign affairs"];

export function SelectSection() {
    return BasicSelect(options, "Section")
};

const employees = [
    'ACL',
    'EGL',
    'KSM',
    'MLI',
    'NGP',
    'PO',
    'YRL'
]

export function SelectSource() {

    return BasicSelect(employees, "Source")
};


const visibilities = [
    'Only myself',
    'Chief Editor',
    'Section Staff',
    'Everyone'
]

export function SelectVisibilities() {
    return BasicSelect(visibilities, "Visibility")
};

const articles = [
    'Amount of votes from low income counties set new records',
    'How to vote as a foreigner in Denmark'
]

export function SelectArticles() {
    return BasicSelect(articles, "Articles")
};