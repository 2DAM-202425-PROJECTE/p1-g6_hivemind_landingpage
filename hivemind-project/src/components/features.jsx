import { Cpu, Globe, Palette, Users } from 'lucide-react'

export default function FeaturesSection() {
    const features = [
        {
            icon: Cpu,
            title: "Tecnologia innovadora",
            description: "HiveMind Nexxus utilitza la tecnologia més avançada per oferir una experiència fluida, segura i personalitzada als seus usuaris."
        },
        {
            icon: Globe,
            title: "Connexions globals",
            description: "Uneix-te a una comunitat global d'usuaris amb interessos compartits, i connecta't amb persones de tot el món."
        },
        {
            icon: Palette,
            title: "Disseny personalitzable",
            description: "Personalitza el teu perfil amb temes únics, emojis exclusius i accessoris que reflecteixen la teva personalitat."
        },
        {
            icon: Users,
            title: "Comunitat activa",
            description: "Gaudeix d'una comunitat vibrant amb funcions socials com missatgeria, publicacions i esdeveniments interactius."
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-br bg-transparent backdrop-blur-3xl rounded-3xl mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl font-extrabold text-white mb-6">
                            Característiques destacades
                        </h2>
                        <p className="text-xl text-black mb-8">
                            HiveMind Nexxus redefineix la manera com connectem amb les nostres comunitats. Descobreix les seves funcionalitats avançades dissenyades per millorar la teva experiència social.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary-dark transition-colors duration-300"
                        >
                            Descobreix més
                        </a>
                    </div>
                    <div className="lg:w-2/3 grid gap-8 md:grid-cols-2">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-white/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                                    index % 2 === 1 ? 'md:translate-y-12' : ''
                                }`}
                            >
                                <feature.icon className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-black text-lg">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
