import {Hero, Nav} from "./components/iande"
export default function App() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <section className="padding">Popular Products components</section>
      <section className="padding">Super Quality</section>
      <section className="padding-x py-10">Services </section>
      <section className="padding">special offers</section>
      <section className="padding bg-pale-blue ">Customer reviews</section>
      <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
      <section className="padding-x padding-t pb-8 bg-black">Footer</section>
    </main>
  )
}