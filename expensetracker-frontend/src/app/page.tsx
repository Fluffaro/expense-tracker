import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="container flex flex-col gap-4 mx-auto max-w-3xl pb-10 pt-20 bg-amber-800">
        <ul className="h-64 p-4 overflow-y-auto bg-gray-500 rounded-lg flex flex-col gap-4 border-8 border-black">
          {/* Add your lorem ipsum text here as list items */}
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at magna eu ipsum vulputate commodo.</li>
          <li>Phasellus tincidunt mauris nec lacus interdum, in varius nisi facilisis. Sed sed elit vel elit cursus laoreet.</li>
          <li>Donec sit amet dolor vel massa faucibus interdum. Sed eget orci vitae dui eleifend tincidunt.</li>
          <li>Quisque eleifend sapien vel dolor fermentum, vel venenatis mauris elementum. Sed viverra, nisi eget ultricies.</li>
          <li>Praesent quis purus eget nibh tempus elementum. Sed vel mauris vel lectus aliquam dignissim vel ut urna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at magna eu ipsum vulputate commodo.</li>
          <li>Phasellus tincidunt mauris nec lacus interdum, in varius nisi facilisis. Sed sed elit vel elit cursus laoreet.</li>
          <li>Donec sit amet dolor vel massa faucibus interdum. Sed eget orci vitae dui eleifend tincidunt.</li>
          <li>Quisque eleifend sapien vel dolor fermentum, vel venenatis mauris elementum. Sed viverra, nisi eget ultricies.</li>
        </ul>
      </section>
    </div>
  );
}