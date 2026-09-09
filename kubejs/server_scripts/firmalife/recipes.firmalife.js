// priority: 0
"use_strict";

const registerFirmalifeRecipes = (event) => {
    event.remove({ id: 'firmalife:alloy/stainless_steel' });
    
    event.remove({ id: /firmalife:anvil\/metal\/.*/ });
    event.remove({ id: 'firmalife:anvil/stainless_steel_jar_lid' });
    
    event.remove({ id: /firmalife:casting\/.*/ });

    event.remove({ id: /firmalife:heating\/metal\/.*/ });
    event.remove({ id: /firmalife:heating\/ore\/.*/ });

    event.remove({ id: /firmalife:welding\/.*/ });
}