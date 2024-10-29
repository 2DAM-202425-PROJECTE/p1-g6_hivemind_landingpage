import { mount } from '@vue/test-utils';//permet muntar els components fer proves
import Comptador from '@/components/Comptador.vue';
import { describe, it, expect } from 'vitest';

//descriu els testos per al component comptador
describe('Comptador.vue', () => {
    //test comprovem el valor inicial
    it('mostra el valor inicial del comptador', () => {
        //Montem el component comptador
        const wrapper = mount(Comptador);

        //comprovem que el text del component conté el text inicial
        expect(wrapper.text()).toContain('Comptador: 0');
    });

    //test comprovem l'increment del comptador
    it('incrementa el comptador quan es clica el botó Incrementar', async () => {
        //Montem el component comptador
        const wrapper = mount(Comptador);

        //troba el botó i el busquem al wrapper
        const incrementarButton = wrapper.find('button:first-of-type');

        //simular que fem el click al botó incrementar
        //hem d'esperar un temps perque no sabem quan farà click l'usuari
        await incrementarButton.trigger('click');

        //comprovem que el text del component ha incrementat el valor
        expect(wrapper.text()).toContain('Comptador: 1');
    });

    //test comprovem que es decrementa el comptador
    it('decrementa el comptador quan es clica el botó Decrementar', async () => {
        //Montem el component comptador
        const wrapper = mount(Comptador);      

        //trobem els dos botons
        const incrementarButton = wrapper.find('button:first-of-type');
        const decrementarButton = wrapper.find('button:last-of-type');

        //simulem l'increment
        await incrementarButton.trigger('click');

        //comprovem l'increment
        expect(wrapper.text()).toContain('Comptador: 1');

        //simulem decrementar
        await decrementarButton.trigger('click');

        //comprovem decrementar
        expect(wrapper.text()).toContain('Comptador: 0');


    });


});