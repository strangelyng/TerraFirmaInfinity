const registerPrimitivePaperRecipes = (event) => {
    // Remove Base GT Recipes
    event.remove({ id: 'gtceu:shaped/paper' })
    event.remove({ id: 'gtceu:chemical_bath/paper_from_wood_dust' })
    event.remove({ id: 'gtceu:chemical_bath/paper_from_wood_dust_distilled' })
    event.remove({ id: 'gtceu:chemical_bath/paper_from_paper_dust' })
    event.remove({ id: 'gtceu:chemical_bath/paper_from_paper_dust_distilled' })
}