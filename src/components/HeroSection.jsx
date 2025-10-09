import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return(
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md: text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">Daniel</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Yie</span>
                    </h1>
                    <p className="text-lg md: text-xl text-muted-foregreound max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am a creative and detail-oriented Front-End Developer which currently work as IT Project Manager based in Malaysia. With a strong foundation in web development and a passion for building responsive, user-friendly digital experiences. Proficient in HTML, CSS, JavaScript, and modern front-end frameworks.
                    </p>
                    <p className="text-lg md: text-xl text-muted-foregreound max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4 mb-10">
                        Skilled in translating UI/UX designs into high-quality code, optimizing performance across devices and browsers, and collaborating with cross-functional teams to deliver seamless products. Experienced in Agile methodology, manage stakeholder expectations, mitigate risks, and drive continuous improvement across the project lifecycle.
                    </p>

                    <div class="opacity-0 animate-fade-in-delay-5">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    ) 
}