import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-vanilla py-10 px-4 min-h-screen page-enter">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <span className="font-serif italic text-gold text-base md:text-lg block mb-1">
          Die Kunst der Saponifikation an der Mosel
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-normal text-moss tracking-tight">
          Über mich & meine Manufaktur
        </h2>
        <div className="w-16 h-[1px] bg-gold mx-auto my-4" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:items-center">
        {/* Left Column: Storytelling & portrait */}
        <div className="md:col-span-7 space-y-6">
          <div className="prose text-moss-dark/65 leading-relaxed text-sm md:text-base space-y-4">
            <p>
              Mein Name ist <span className="text-moss font-semibold">Marion Muszarsky</span> und ich bin die Gründerin der {' '}
              <span className="text-moss font-semibold">La Mosella Seifenmanufaktur</span>.
            </p>
            <p>
              Was einst als kreatives Hobby begann, entwickelte sich zu einer großen Leidenschaft. Nach mehreren Jahren
              des Experimentierens und Lernens gründete ich 2015 meine eigene kleine Seifenmanufaktur.
            </p>
            <p>
              Seitdem entstehen mit viel Liebe zum Detail, hochwertigen pflanzlichen Rohstoffen und handwerklicher
              Sorgfalt einzigartige Naturseifen. Die kontinuierliche Weiterentwicklung meiner Rezepturen, die sorgfältige
              Auswahl der Inhaltsstoffe und meine Begeisterung für das traditionelle Seifenhandwerk begleiten mich bis heute.
            </p>
            <p>
              Jede Seife wird von mir in kleinen Chargen von Hand gefertigt. Mein Ziel ist es, natürliche Pflege mit
              hoher Qualität, liebevoller Gestaltung und einem besonderen Anspruch an Ästhetik zu verbinden.
            </p>
            <p>
              Ich freue mich, wenn meine Seifen nicht nur die Haut verwöhnen, sondern auch ein kleines Stück Freude
              in den Alltag bringen.
            </p>
            <p className="italic font-serif text-moss">
              Natürlich. Handgemacht. Mit Liebe.
            </p>
          </div>

        </div>

        {/* Right Column: Artisan Portrait Card */}
        <div className="md:col-span-5">
          <div className="rounded-2xl border-2 border-moss overflow-hidden bg-vanilla-dark shadow-xl relative p-3 jugendstil-corner">
            <img
              src="/images/marion_portrait_1779655251734.webp"
              alt="Marion Muszarsky in der Seifenmanufaktur"
              className="w-full h-auto rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
