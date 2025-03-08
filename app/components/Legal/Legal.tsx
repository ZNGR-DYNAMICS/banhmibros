import React, { useEffect, useState } from 'react';

type Language = 'en' | 'de';
const dateDe = '8. März 2025';
const dateEn = 'March 8th 2025';

const Legal: React.FC = () => {
    const [language] = useState<Language>(() => navigator.language.startsWith('de') ? 'de' : 'en');

    useEffect(() => {
        const translateableElements = document.querySelectorAll<HTMLElement>('[data-en], [data-de]');

        translateableElements.forEach(element => {
            const text = element.getAttribute(`data-${language}`);
            if (text) {
                element.textContent = text;
            }
        });
    }, [language]);

    return (
        <div className='flex flex-col bg-white-500 p-4 md:p-8 lg:p-16 gap-8 text-black-500'>
            <header className='flex flex-col gap-4'>
                <h1 className="text-9xl circula-black break-normal" data-en="Legal" data-de="Rechtliches" />
                <p data-en={`Last Updated: ${dateEn}`} data-de={`Zuletzt aktualisiert: ${dateDe}`} />
            </header>
            <div className='flex flex-col text-lg'>
                <h2 className='text-2xl' data-en="Imprint" data-de="Impressum" />
                <p>BM Bros GmbH</p>
                <p>Metzgergasse 15</p>
                <p>CH-9000 St.Gallen</p>
                <p>078 480 92 23</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 data-en="Concept, Design, Development" data-de="Konzept, Design, Entwicklung"></h2>
                <p>ZNGR DYNAMICS, St.Gallen</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 data-en="Disclaimers" data-de="Hinweise"/>
                <p
                    data-en="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio asperiores temporibus quae, natus sed dicta! Officiis officia, mollitia quibusdam ab quod, error dolores delectus aliquam reprehenderit accusantium reiciendis? Suscipit beatae repellendus aliquam facilis vitae maxime minus tempora commodi? Esse in asperiores vel id illum et explicabo deserunt neque qui!"
                    date-de="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio asperiores temporibus quae, natus sed dicta! Officiis officia, mollitia quibusdam ab quod, error dolores delectus aliquam reprehenderit accusantium reiciendis? Suscipit beatae repellendus aliquam facilis vitae maxime minus tempora commodi? Esse in asperiores vel id illum et explicabo deserunt neque qui!"
                />
                <h3 data-en="Disclaimer for Links" data-de="Hinweise für Links"/>
                <p
                    data-en="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sapiente mollitia hic. Hic incidunt libero corporis maiores nostrum a voluptates pariatur dolores in, repudiandae odio aperiam, veniam voluptatibus atque rerum enim iste eum dicta, est ad unde voluptate saepe! Quisquam doloribus a amet animi deleniti? Dolorum cumque animi eum porro."
                    data-de="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sapiente mollitia hic. Hic incidunt libero corporis maiores nostrum a voluptates pariatur dolores in, repudiandae odio aperiam, veniam voluptatibus atque rerum enim iste eum dicta, est ad unde voluptate saepe! Quisquam doloribus a amet animi deleniti? Dolorum cumque animi eum porro."
                />
                <h3 data-en="Copyright" data-de="Urheberrecht"/>
                <p
                    data-en="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sapiente mollitia hic. Hic incidunt libero corporis maiores nostrum a voluptates pariatur dolores in, repudiandae odio aperiam, veniam voluptatibus atque rerum enim iste eum dicta, est ad unde voluptate saepe! Quisquam doloribus a amet animi deleniti? Dolorum cumque animi eum porro."
                    data-de="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sapiente mollitia hic. Hic incidunt libero corporis maiores nostrum a voluptates pariatur dolores in, repudiandae odio aperiam, veniam voluptatibus atque rerum enim iste eum dicta, est ad unde voluptate saepe! Quisquam doloribus a amet animi deleniti? Dolorum cumque animi eum porro."
                />
            </div>
            <div className='flex flex-col gap-4'>
                <h2 data-en="Privacy Policy" data-de="Datenschutz"/>
            </div>
        </div>
    )
}
export default Legal;