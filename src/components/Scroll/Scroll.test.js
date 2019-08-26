import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll', () => {
    it('should match the snapsot with all data passed through', () => {
        const fakeFilmData= [{
            count: 7,
            next: null,
            previous: null,
            results: [{
                title: "A New Hope",
                episode_id: 4,
                opening_crawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                director: "George Lucas",
                producer: "Gary Kurtz, Rick McCallum",
                release_date: "1977-05-25",
            
            },
            {
                "title": "Attack of the Clones",
                "episode_id": 2,
                "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
                "director": "George Lucas",
                "producer": "Rick McCallum",
                "release_date": "2002-05-16",
            }]
        }]
        const wrapper = shallow(<Scroll
            film={fakeFilmData}
            />);
        expect(wrapper).toMatchSnapshot();
    })
})