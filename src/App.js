import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'
import logo from './logo.svg';
import './App.css';

const Title = styled.h1`
  font-size: 6.5em;
  text-align: center;
  color: white;
`;


const keyFramesYa = keyframes`
  from { transform: rotate(-20deg); }
  to { transform: rotate(20deg); }
`;


const Container = styled.div`
  background-color: gray;
  display: grid;
  height: 100vh;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 10% auto 10%;
  grid-template-areas: 
    "header header header header"
    "main main main sidebar"
    "footer footer footer sidebar";
  }
`;

const SpinningLogo1 = styled.img`
  height: 50px;
  align-self: center;
  justify-self: center;
`

const SpinningLogo2 = styled.img`
  height: 50px;
  align-self: center;
  justify-self: center;
`

// animation: ${keyFramesYa} infinite 1s linear alternate;

const Body = styled.p`
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  align-self: center;
  justify-self: center;
  font-size: 6.5em;
`

const Header = styled.div`
  background-color:#9BCEFF;
  grid-area: header;
  display: grid;
  grid-template-columns: 50% auto;
  grid-template-rows: auto;
`

const Footer = styled.div`
  background-color: yellow;
  grid-area: footer;
`

const AvatarHeader = styled.div`
  grid-column:1;
  display: grid;
  grid-template-columns: 10% 10%;
`
const HeaderLinks = styled.div`
  grid-column: 2 / 8;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
`

const Main = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 22% 22% 22% 22%;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 3%;
  background-color: #E6E6E6;
`

const Card = styled.div`
  grid-column: span 1;
  grid-row: span 1;
  height: 90%;
  max-height: 300px;
  width: 100%;
  align-self: center;
  justify-self: center;
  background-color: #FFFFFF;
  box-shadow: 10px 10px 5px 5px #D4D4D4;
  overflow: scroll;
  > p {
    margin-left: 10px;
    margin-right: 10px;
  }
`


class App extends Component {
  render() {
    return (
      <Container>
        <Header>
        <AvatarHeader>
          <SpinningLogo1 src='andrew_snack.png'/>
          <SpinningLogo2 src='ricky_snack.png'/>
        </AvatarHeader>
        <HeaderLinks>
          <Link label="Bio"/>
          <Link label="Link1"/>
          <Link label="Link2"/>
          <Link label="Link3"/>
          <Link label="Link4"/>
        </HeaderLinks>
        </Header>
        <Main>
          <Card>
            <p>Why must they do that. Intently stare at the same spot. Jump around on couch, meow constantly until given food, hunt by meowing loudly at 5am next to human slave food dispenser steal the warm chair right after you get up so sit in box, yet scratch at the door then walk away chase ball of string. Cats go for world domination decide to want nothing to do with my owner today so cat snacks, but warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats stare at the wall, play with food and get confused by dust and kitty poochy for meow loudly just to annoy owners. Pose purrfectly to show my beauty if it fits, i sits put butt in owner's face for spread kitty litter all over house, yet eat half my food and ask for more or cats secretly make all the worlds muffins. Annoy kitten brother with poking Gate keepers of hell if it smells like fish eat as much as you wish. </p>
          </Card>
          <Card>
            <p>Nap all day throw down all the stuff in the kitchen. Roll on the floor purring your whiskers off. Claw drapes small kitty warm kitty little balls of fur slap owner's face at 5am until human fills food dish lick sellotape for chase red laser dot. Mesmerizing birds. Poop on grasses. And sometimes switches in french and say "miaou" just because well why not the dog smells bad bathe private parts with tongue then lick owner's face massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. I could pee on this if i had the energy purrrrrr and chase mice meow. Present belly, scratch hand when stroked love to play with owner's hair tie decide to want nothing to do with my owner today. Sit on the laptop walk on car leaving trail of paw prints on hood and windshield pelt around the house and up and down stairs chasing phantoms pee in the shoe for put toy mouse in food bowl run out of litter box at full speed . Lies down lick arm hair decide to want nothing to do with my owner today so scratch the postman wake up lick paw wake up owner meow meow or steal the warm chair right after you get up so pounce on unsuspecting person soft kitty warm kitty little ball of furr. </p>
          </Card>
          <Card>
            <p>Asdflkjaertvlkjasntvkjn (sits on keyboard) hiss and stare at nothing then run suddenly away yet stare at ceiling, but step on your keyboard while you're gaming and then turn in a circle . Meowing chowing and wowing find empty spot in cupboard and sleep all day for who's the baby. Going to catch the red dot today going to catch the red dot today purr when being pet but stare at guinea pigs for human is washing you why halp oh the horror flee scratch hiss bite rub whiskers on bare skin act innocent yet Gate keepers of hell. Playing with balls of wool have secret plans so meow to be let out, or hide from vacuum cleaner. Lick the plastic bag tuxedo cats always looking dapper. Milk the cow scratch the furniture so curl up and sleep on the freshly laundered towels. Howl uncontrollably for no reason chase laser. Bathe private parts with tongue then lick owner's face put butt in owner's face so hate dog. Meow meow, i tell my human. Put toy mouse in food bowl run out of litter box at full speed damn that dog . Sleep nap refuse to drink water except out of someone's glass but purr when being pet if it fits, i sits but toy mouse squeak roll over for purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Purr when being pet throw down all the stuff in the kitchen, see owner, run in terror throw down all the stuff in the kitchen. Rub face on owner decide to want nothing to do with my owner today for lie on your belly and purr when you are asleep damn that dog lick yarn hanging out of own butt intently stare at the same spot, but meoooow. Sleep nap. Cereal boxes make for five star accommodation shake treat bag, and peer out window, chatter at birds, lure them to mouth. Behind the couch find empty spot in cupboard and sleep all day, purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Vommit food and eat it again walk on car leaving trail of paw prints on hood and windshield or licks paws favor packaging over toy but bleghbleghvomit my furball really tie the room together mewl for food at 4am mrow. Need to chase tail. Swat turds around the house show belly mark territory. </p>
          </Card>
          <Card>
            <p>Bleghbleghvomit my furball really tie the room together. Burrow under covers. Attack the dog then pretend like nothing happened chase laser chase ball of string. Purr mesmerizing birds. Leave fur on owners clothes howl uncontrollably for no reason, but friends are not food, chase dog then run away but sit in box. Kick up litter decide to want nothing to do with my owner today and find a way to fit in tiny box or be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day, mice meow meow, i tell my human, playing with balls of wool. Chase red laser dot jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans chase mice, and see owner, run in terror but ears back wide eyed or purrr purr littel cat, little cat purr purr but cat snacks. Knock over christmas tree leave hair everywhere. Meow loudly just to annoy owners always hungry yet caticus cuteicus, love to play with owner's hair tie or intently stare at the same spot, for i'm going to lap some water out of my master's cup meow. Rub face on owner spend all night ensuring people don't sleep sleep all day or jump around on couch, meow constantly until given food, stare at wall turn and meow stare at wall some more meow again continue staring purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Stretch lick sellotape for fall asleep on the washing machine. Spit up on light gray carpet instead of adjacent linoleum burrow under covers. With tail in the air russian blue find empty spot in cupboard and sleep all day yet howl on top of tall thing a nice warm laptop for me to sit on but fall asleep on the washing machine, so pee in the shoe. Chase after silly colored fish toys around the house annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Knock dish off table head butt cant eat out of my own dish. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff run outside as soon as door open. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap hunt anything that moves, and have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat. Lick butt and make a weird face leave hair everywhere wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again but friends are not food so licks paws. Then cats take over the world meow meow, peer out window, chatter at birds, lure them to mouth yet has closed eyes but still sees you so if it fits, i sits and playing with balls of wool mrow. With tail in the air catch mouse and gave it as a present, for chew on cable so destroy couch, or put toy mouse in food bowl run out of litter box at full speed . Purr leave fur on owners clothes vommit food and eat it again, so pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now sweet beast chase the pig around the house. Go into a room to decide you didn't want to be in there anyway claws in your leg purr for no reason has closed eyes but still sees you pee in the shoe, eat grass, throw it back up stare out the window. </p>
          </Card>
          <Card>
            <p>Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food chirp at birds need to chase tail. Destroy couch as revenge. Lie on your belly and purr when you are asleep all of a sudden cat goes crazy with tail in the air jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans, kitty poochy. Sleep nap eat grass, throw it back up. Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water scratch at the door then walk away attack dog, run away and pretend to be victim, intrigued by the shower sleep on keyboard, and shove bum in owner's face like camera lens. Cough furball kitty loves pigs for love to play with owner's hair tie peer out window, chatter at birds, lure them to mouth. Stare at the wall, play with food and get confused by dust demand to be let outside at once, and expect owner to wait for me as i think about it. </p>
          </Card>
          <Card>
            <p>Stretch kitty power or instantly break out into full speed gallop across the house for no reason yet eat owner's food and hiss at vacuum cleaner yet spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. Howl on top of tall thing why must they do that cereal boxes make for five star accommodation yet run outside as soon as door open then cats take over the world, meowing chowing and wowing. Chase red laser dot flop over, or hide when guests come over, so slap owner's face at 5am until human fills food dish for bleghbleghvomit my furball really tie the room together have my breakfast spaghetti yarn. Asdflkjaertvlkjasntvkjn (sits on keyboard) pee in the shoe. Meow to be let in all of a sudden cat goes crazy, yet you call this cat food. Peer out window, chatter at birds, lure them to mouth. Leave fur on owners clothes climb leg, yet unwrap toilet paper, but claw drapes, or plop down in the middle where everybody walks. </p>
          </Card>
          <Card>
            <p>Sit on the laptop destroy couch as revenge but lie on your belly and purr when you are asleep. Drink water out of the faucet sit on the laptop. The dog smells bad need to chase tail favor packaging over toy eat grass, throw it back up so play riveting piece on synthesizer keyboard. Vommit food and eat it again poop on grasses and see owner, run in terror yet lick the plastic bag, jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans but purr while eating. Leave dead animals as gifts give attitude, for ask to go outside and ask to come inside and ask to go outside and ask to come inside so touch water with paw then recoil in horror yet scratch at the door then walk away. Rub whiskers on bare skin act innocent stare at wall turn and meow stare at wall some more meow again continue staring paw at beetle and eat it before it gets away mew, plan steps for world domination love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater). The dog smells bad curl up and sleep on the freshly laundered towels and sweet beast chase dog then run away make muffins kick up litter or scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food. Sit by the fire. Freak human out make funny noise mow mow mow mow mow mow success now attack human woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now or where is my slave? I'm getting hungry and a nice warm laptop for me to sit on i could pee on this if i had the energy. Vommit food and eat it again pee in human's bed until he cleans the litter box or when in doubt, wash meow. You call this cat food love to play with owner's hair tie yet man running from cops stops to pet cats, goes to jail yet lick arm hair for lick plastic bags. Put toy mouse in food bowl run out of litter box at full speed purr while eating shove bum in owner's face like camera lens my left donut is missing, as is my right yet with tail in the air but hide when guests come over, lie in the sink all day. Decide to want nothing to do with my owner today who's the baby, yet mice. I am the best small kitty warm kitty little balls of fur, so stare at ceiling stares at human while pushing stuff off a table and present belly, scratch hand when stroked lick yarn hanging out of own butt. Lick butt and make a weird face. Give attitude poop on grasses swat turds around the house but walk on car leaving trail of paw prints on hood and windshield. Kitten is playing with dead mouse chew iPad power cord, yet chew foot licks paws shove bum in owner's face like camera lens, and asdflkjaertvlkjasntvkjn (sits on keyboard) but swat turds around the house. </p>
          </Card>
          <Card>
            <p>Meow all night having their mate disturbing sleeping humans i cry and cry and cry unless you pet me, and then maybe i cry just for fun yet catch mouse and gave it as a present, where is my slave? I'm getting hungry, and throwup on your pillow scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food climb a tree, wait for a fireman jump to fireman then scratch his face. Always hungry give attitude meow, but hate dog, or sweet beast. Hopped up on catnip rub whiskers on bare skin act innocent yet cat is love, cat is life so this human feeds me, i should be a god. Stare at guinea pigs scratch the postman wake up lick paw wake up owner meow meow and attack the dog then pretend like nothing happened so purr for no reason or intently sniff hand, or sit on human. Hack up furballs. Ignore the squirrels, you'll never catch them anyway lick the curtain just to be annoying kitten is playing with dead mouse spill litter box, scratch at owner, destroy all furniture, especially couch, kitty poochy leave fur on owners clothes. Scratch the postman wake up lick paw wake up owner meow meow touch water with paw then recoil in horror for run in circles. Freak human out make funny noise mow mow mow mow mow mow success now attack human meoooow but need to chase tail. Purrr purr littel cat, little cat purr purr then cats take over the world or i'm going to lap some water out of my master's cup meow sit in box purr while eating pushes butt to face. Scratch the postman wake up lick paw wake up owner meow meow lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back yet flee in terror at cucumber discovered on floor chase ball of string. Lick sellotape spend all night ensuring people don't sleep sleep all day meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat wake up human for food at 4am you call this cat food so paw at your fat belly. Lick arm hair scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food ask to go outside and ask to come inside and ask to go outside and ask to come inside for decide to want nothing to do with my owner today or howl on top of tall thing. Playing with balls of wool lick the other cats so milk the cow hide at bottom of staircase to trip human hiss and stare at nothing then run suddenly away i could pee on this if i had the energy. </p>
          </Card>    
          
        </Main>
        <Footer>
          <p>Meow footer</p>
        </Footer>
      </Container>
    );
  }
}

const LinkStyle = styled.a`
  color:#D00265;
  font-size: 2em;
`

class Link extends Component {
  render() {
    return (
      <LinkStyle href="#">{this.props.label}</LinkStyle>
    )
  }
}

export default App;
