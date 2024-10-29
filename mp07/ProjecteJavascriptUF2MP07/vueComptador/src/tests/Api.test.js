import { mount } from '@vue/test-utils';//permet muntar els components fer proves
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import ProvaApi from '@/components/ProvaApi.vue';

//Peticions simulades de axios per evitar peticions reales durant les proves
vi.mock('axios');

//descriu el grup de tests del component ProvaApi
describe('ProvaApi.vue', () => {

    //test per carregar i mostrar els posts
    it('carrega i mostra els posts correctament', async () =>{
        //Mock (simulem falsament l'estructura) de la resposta d'axios per als posts
        //creem array associativa falsa en 2 posts
        const mockPosts = [
            { id: 1, title: 'Post 1', body: 'Aquest és el post 1' },
            { id: 2, title: 'Post 2', body: 'Aquest és el post 2' }
        ];

        //fem la petició axios falsament per a que ens retorne l'estructura falsa mockPosts
        axios.get.mockResolvedValueOnce({ data: mockPosts });

        //carreguem el component provaApi
        const wrapper = mount(ProvaApi)

        //esperem a que vue hagi processat la crida a la API
        await wrapper.vm.$nextTick();

        //esperem un temps per assegurar-nos que la resposta s'hagi processat
        await new Promise(resolve => setTimeout(resolve, 100));

        //Busquem que hi hagi titols h3
        const postTitles = wrapper.findAll('h3');

        //comprovem que hi ha dos posts
        expect(postTitles.length).toBe(2);

        //Comprovem els dos titols
        expect(postTitles[0].text()).toContain('Post 1');
        expect(postTitles[1].text()).toContain('Post 2');

    });

    //test per carregar i mostrar les fotos correctament
    it('carrega i mostra les fotos correctament', async () => {
        //Mock de fotos
        const mockFotos = [
            { id: 1, title: 'Foto 1', url: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Foto 2', url: 'https://via.placeholder.com/150' }
        ]

        //resposta mockada
        axios.get.mockResolvedValueOnce({ data: mockFotos });

        //carreguem component
        const wrapper = mount(ProvaApi);

        //esperem que vue processi la crida a la API
        await wrapper.vm.$nextTick();

        //esperem un temps per assegurar-nos que la resposta s'ha processat
        await new Promise(resolve => setTimeout(resolve, 100));

        //comprovem que hi ha les fotos
        expect(wrapper.html()).toContain('Foto 1');
        expect(wrapper.html()).toContain('Foto 2');

        //comprovem que la imatge té la url correcta
        expect(wrapper.find('img').attributes('src')).toBe('https://via.placeholder.com/150');


    });


});
