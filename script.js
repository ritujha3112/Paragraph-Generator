const text=[`Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria. Jellyfish are mainly free-swimming marine animals with umbrella-shaped bells and trailing tentacles, although a few are anchored to the seabed by stalks rather than being mobile. The bell can pulsate to provide propulsion for highly efficient locomotion. The tentacles are armed with stinging cells and may be used to capture prey and defend against predators. Jellyfish have a complex life cycle; the medusa is normally the sexual phase, which produces planula larvae that disperse widely and enter a sedentary polyp phase before reaching sexual maturity.`,

`A seahorse (also written sea-horse and sea horse) is any of 46 species of small marine fish in the genus Hippocampus. "Hippocampus" comes from the Ancient Greek hippókampos (ἱππόκαμπος), itself from híppos (ἵππος) meaning "horse" and kámpos (κάμπος) meaning "sea monster"[4][5] or "sea animal".[6] Having a head and neck suggestive of a horse, seahorses also feature segmented bony armour, an upright posture and a curled prehensile tail.[7] Along with the pipefishes and seadragons (Phycodurus and Phyllopteryx) they form the family Syngnathidae.`,

`Starfish are marine invertebrates. They typically have a central disc and usually five arms, though some species have a larger number of arms. The aboral or upper surface may be smooth, granular or spiny, and is covered with overlapping plates. Many species are brightly coloured in various shades of red or orange, while others are blue, grey or brown. Starfish have tube feet operated by a hydraulic system and a mouth at the centre of the oral or lower surface. They are opportunistic feeders and are mostly predators on benthic invertebrates. Several species have specialized feeding behaviours including eversion of their stomachs and suspension feeding. They have complex life cycles and can reproduce both sexually and asexually. Most can regenerate damaged parts or lost arms and they can shed arms as a means of defense. The Asteroidea occupy several significant ecological roles. Starfish, such as the ochre sea star (Pisaster ochraceus) and the reef sea star (Stichaster australis), have become widely known as examples of the keystone species concept in ecology. The tropical crown-of-thorns starfish (Acanthaster planci) is a voracious predator of coral throughout the Indo-Pacific region, and the Northern Pacific seastar is on the list of the World's 100 Worst Invasive Alien Species.`,

`A coral reef is an underwater ecosystem characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate.[1] Most coral reefs are built from stony corals, whose polyps cluster in groups.

Coral belongs to the class Anthozoa in the animal phylum Cnidaria, which includes sea anemones and jellyfish. Unlike sea anemones, corals secrete hard carbonate exoskeletons that support and protect the coral. Most reefs grow best in warm, shallow, clear, sunny and agitated water. Coral reefs first appeared 485 million years ago, at the dawn of the Early Ordovician, displacing the microbial and sponge reefs of the Cambrian.`,

`Clownfish or anemonefish are fishes from the subfamily Amphiprioninae in the family Pomacentridae. Thirty species of clownfish are recognized: one in the genus Premnas, while the remaining are in the genus Amphiprion. In the wild, they all form symbiotic mutualisms with sea anemones. Depending on the species, anemonefish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches. The largest can reach a length of 17 cm (6+1⁄2 in), while the smallest barely achieve 7–8 cm`]

const item = document.querySelector("#items");
const dataContainer = document.querySelector("#data");
const generate = () =>{
if(isNaN(item.value) || item.value<0 || item.value>9){
    const randomIndex = Math.floor(Math.random()*text.length);
    dataContainer.innerHTML = `<p> ${text[randomIndex]} </p>`
}else{
    const data = text.slice(0, item.value)
    const parars = data.map(
        (d) => {
            return `<p> ${d} </p>`
        }
    )
    dataContainer.innerHTML = parars.join()
}
}