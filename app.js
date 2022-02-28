const { leerInput, pausa, inquirerMenu } = require ("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

console.clear();

const main = async () => {

    const busquedas = new Busquedas(); 
    let opt;

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                console.log(lugar);

                //Buscar los lugares

                //Mostrar resultados
                console.log('\n Informacion de la ciudad \n'.green);
                console.log('Ciudad: ', );
                console.log('Lat: ', );
                console.log('Lng: ', );
                console.log('Temperatura: ', );
                console.log('Mínima: ', );
                console.log('Máxima: ', );
                break;
        
        }
        
        if (opt !== 0)  await pausa();
        
    } while (opt !== 0);

}

main();