class Character  {
    name: string;
    cloth: string;
    age: number;
    faction: string;
    mentor: string;
    origin: string;
    avatar: string;
}

class Player{
        name: string;
        age: number;
        level: string;
        secondAccount: string;
        findIt: string;
        aWord: string;
}

export class PresentationFormTypes {
    coverImage: string = 'https://iili.io/JCoi37.png';
    history: string = '';
    psychology: string = '';
    physiology: string = '';
    character: Character = {
        name: '',
        cloth: '',
        age: 0,
        faction:  '',
        mentor:  '',
        origin:  '',
        avatar:  'https://iili.io/JKQa4e.png',
    }
    player: Player = {
        name: '',
        age: 0,
        level: '',
        secondAccount: '',
        findIt: '',
        aWord: '',
    }

}