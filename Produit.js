const produits=[
  {id :1, nom :'clavier', catégorie:'Accessoires', prix :120 ,stock:5},
  {id :2, nom:'Souris', catégorie:'Accessoires', prix :80 ,stock:8 },
  {id :3, nom:'Écran', catégorie:'Informatique', prix :900 ,stock:0 },
  {id :4, nom:'Casque', catégorie:'Accessoires', prix :240 ,stock:3 }
];
for(const produit of produits){
   console.log(produit.nom + "-" + produit.prix +"MAD");
}
const produit_disponible =produits.filter((produit_disponible) =>produit_disponible.stock>0);
console.log(produit_disponible);
const stock = produits.reduce(
  (somme,produit)=>somme+produit.prix*produit.stock, 0
);
console.log(stock);
if(produit_disponible.length>0){
  const produitmoinscher=produit_disponible.reduce(
    (moinscher,produit) => produit.prix<moinscher.prix
    );
  console.log(produitmoinscher)
  }else{
     console.log("le produit n'est pas disponible")
  }
const resume = produits.map(
    (produit) => produit.nom + " - " + produit.prix + " MAD - " + produit.stock + " unités"
);

console.log(resume);
  