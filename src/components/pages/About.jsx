import Input from "../common/Input"
import Button from "../common/Button"

const About = () => {
    return (
        <div id="about-page">
            <h2>About Home Cycle</h2>
            <p>💛 The Magnificent Yellow-Throated Toucan
The Yellow-throated Toucan (Ramphastos ambiguus), also known as the Black-mandibled Toucan, is a striking and charismatic bird native to the humid tropical forests of Central and South America, ranging from Honduras down to western Ecuador. It is one of the largest and most visually impressive toucans, instantly recognizable by its gigantic, colorful bill and its bold plumage. The body is primarily a glossy black, creating a dramatic contrast with the bright yellow feathers that adorn its throat and upper chest, giving the species its common name. Adding to its flamboyant appearance, the base of its massive bill is often a vibrant crimson, the middle section is a pale lime green, and the tip can be a deeper olive. This huge, yet surprisingly lightweight, bill is not just for show; it plays a crucial role in foraging for fruit, regulating body temperature, and intimidating competitors or predators.
<br />
<br />
These magnificent birds are primarily frugivores, with their diet consisting mainly of a wide variety of tropical fruits, which they often pluck from branches using the very tip of their bill. However, they are opportunistic feeders and will also consume insects, small reptiles, and the eggs or nestlings of other birds. Yellow-throated Toucans are social animals, typically moving through the canopy in small, noisy flocks or pairs, communicating through a loud, croaking call that can carry long distances through the dense forest. They nest in natural tree cavities, often those previously excavated by woodpeckers. Due to habitat loss from deforestation, the Yellow-throated Toucan is a species of conservation concern, highlighting the importance of protecting the vibrant tropical ecosystems it inhabits.</p>
            <br />
            <Input>TODO: Name</Input>
            <Input>TODO: Email</Input>
            <Input>TODO: Feedback</Input>
            <Button id="submit-feedback" type="submit" label="Submit" handleClick="TBD" classes="submit button feedback"/>
        </div>
    )
}

export default About