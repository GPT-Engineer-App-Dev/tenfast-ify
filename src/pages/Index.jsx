import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package2 } from "lucide-react"; // Add this import
import { useState } from "react";

const Index = () => {
  const [faq, setFaq] = useState([
    { question: "Vad är TenFAST fastighetssystem?", answer: "TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärdar och fastighetsägare.", isOpen: false },
    { question: "Vad är en fastighet?", answer: "En fastighet är en avgränsad del av mark som är registrerad i fastighetsregistret.", isOpen: false },
    { question: "Hur fungerar fastighetssystemet i mobilen?", answer: "TenFAST fungerar lika bra i mobilen som på datorn.", isOpen: false },
    { question: "Hur kan jag kontakta support?", answer: "Du kan kontakta vår support via e-post på support@tenfast.se eller ringa oss på +46 08-999 555.", isOpen: false },
  ]);

  const toggleFaq = (index) => {
    setFaq(faq.map((item, i) => (i === index ? { ...item, isOpen: !item.isOpen } : item)));
  };

  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-blue-900 text-white">
        <h1 className="text-4xl font-bold">Ett modernt fastighetssystem</h1>
        <p className="mt-4 text-lg">TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärdar och fastighetsägare.</p>
        <div className="mt-8">
          <p>kontakta@tenfast.se</p>
          <p>+46 08-999 555</p>
        </div>
        <Button variant="primary" className="mt-8">Kom igång</Button>
      </section>

      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">Fastighetssystemet för din verksamhet</h2>
        <p className="mt-4 text-lg">Program för fastighetsägare, förvaltningsbolag och kommuner mm.</p>
        <div className="mt-8 flex justify-center space-x-8">
          <img src="/images/laptop.png" alt="Laptop" className="w-1/3" />
          <img src="/images/mobile.png" alt="Mobile" className="w-1/3" />
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Det här får du med TenFAST</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Artikelskapare med mallar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Välj från färdiga mallar eller skapa egna för att enkelt hantera artiklar.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hyresgäst Inloggning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hyresgästerna kan logga in och se sina avtal, betalningar och felanmälningar.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bostadskö</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hantera bostadsköer. Låt hyresgäster ansöka om bostäder direkt i systemet.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bokföring</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integrerad bokföring med stöd för alla vanliga bokföringssystem.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Statistik</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Få detaljerad statistik över hyresintäkter, betalningar och andra nyckeltal.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Felanmälan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hyresgäster kan enkelt göra felanmälningar som hanteras direkt i systemet.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Automatiska betalningar</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Automatisera betalningar och påminnelser för att minska administrationen.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Öppet API</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integrera TenFAST med andra system via vårt öppna API.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Passar stora och små</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Free</CardTitle>
            </CardHeader>
            <CardContent>
              <p>0 kr</p>
              <p>För privatpersoner och mindre företag med upp till 5 hyresobjekt.</p>
              <Button variant="primary" className="mt-4">Kom igång</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <p>10 kr / hyresobjekt / månad</p>
              <p>För hyresvärdar och företag med upp till 100 hyresobjekt.</p>
              <Button variant="primary" className="mt-4">Kom igång</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Offert</p>
              <p>För fastighetsbolag eller företag som förvaltar fler än 100 hyresobjekt.</p>
              <Button variant="secondary" className="mt-4">Kontakta oss</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Vanliga frågor</h2>
        <div className="mt-8 space-y-4">
          {faq.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger onClick={() => toggleFaq(index)}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>

      <footer className="py-16 text-center bg-blue-900 text-white">
        <div className="mb-8">
          <Package2 className="h-6 w-6 mx-auto" />
          <p className="mt-4">Logga in</p>
          <p>Kontakta oss</p>
        </div>
        <p>Sankt Eriksgatan 12, 112 39 Stockholm</p>
        <p>kontakt@tenfast.se</p>
      </footer>
    </div>
  );
};

export default Index;
