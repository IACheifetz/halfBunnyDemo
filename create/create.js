import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(form);

    const familyId = data.get('family-id');
    const name = data.get('bunny-name');

    await createBunny({
        name: name, 
        family_id: familyId
    });
    
    window.location.replace('../families');

    form.reset();
});

window.addEventListener('load', async () => {
    const select = document.querySelector('select');
    const diesel = await getFamilies();

    for (let vin of diesel) {
        const option = document.createElement('option');

        option.value = vin.id;
        option.textContent = vin.name;

        select.append(option);
    }
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
