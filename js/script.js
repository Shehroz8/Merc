import tabs from './modules/tabs';
import modal from './modules/modal';
import data from './modules/data';
import cards from './modules/cards';
import form from './modules/form';
import slider from './modules/slider';
import loader from './modules/loader';
import accordion from './modules/accordion';
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {
    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 50000);

    tabs();
    modal('[data-modal]', '.modal', modalTimer);
    data();
    cards();
    form(modalTimer);
    slider();
    loader();
    accordion();
});