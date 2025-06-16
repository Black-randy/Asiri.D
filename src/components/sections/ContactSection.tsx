import { Card } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { contactContent } from '@/data/contact';
import { socialLinks } from '@/data/social';
// import { friends } from '@/data/friends';
import { MessageCircle } from 'lucide-react';
import { WhatsappPopover } from '@/components/ui/WhatsApp-popover';
import { logEvent, EventCategories, EventActions } from '@/lib/analytics';

interface SocialButtonProps {
  label: string;
  href: string;
  icon: React.ElementType;
  onClick: () => void;
}

const SocialButton = ({ label, href, icon: Icon, onClick }: SocialButtonProps) => (
  <Button
    variant="outline"
    size="icon"
    className="hover:scale-110 transition-transform hover:bg-primary hover:text-primary-foreground"
    aria-label={label}
    onClick={() => {
      onClick();
      window.open(href, '_blank');
    }}
  >
    <Icon className="h-5 w-5" />
  </Button>
);

const SocialButtons = () => (
  <div className="flex flex-wrap gap-4">
    <WhatsappPopover>
      <Button
        variant="outline"
        size="icon"
        className="hover:scale-110 transition-transform hover:bg-primary hover:text-primary-foreground"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
    </WhatsappPopover>
    {socialLinks.map((link) => (
      <SocialButton
        key={link.label}
        label={link.label}
        href={link.href}
        icon={link.icon}
        onClick={() => handleSocialClick(link.label, link.href)}
      />
    ))}
  </div>
);

const handleSocialClick = (platform: string, url: string) => {
  logEvent(EventCategories.SOCIAL, EventActions.CLICK, platform);
  window.open(url, '_blank');
};

const ContactCard = ({  title,  description,  listItems,  note,}: {
  title: string;
  description: string;
  listItems?: string[];
  note?: string;
}) => (
  <Card className="p-8 hover:shadow-lg transition-shadow">
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      {listItems && (
        <ul className="list-disc pl-6 text-muted-foreground/90 my-2 space-y-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      )}
      {note && <div className="text-xs text-primary font-medium mt-2">{note}</div>}
      {/* SocialButtons removed from here */}
    </div>
  </Card>
);

const ContactCard_2 = ({  title,  description,  listItems,  note,}: {
  title: string;
  description: string;
  listItems?: string[];
  note?: string;
}) => (
  <Card className="p-8 hover:shadow-lg transition-shadow">
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      {listItems && (
        <ul className="list-disc pl-6 text-muted-foreground/90 my-2 space-y-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      )}
      {note && <div className="text-xs text-primary font-medium mt-2">{note}</div>}
      <SocialButtons />
    </div>
  </Card>
);

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">{contactContent.title}</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">{contactContent.description}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactCard
            title={contactContent.cards.cooperation.title}
            description={contactContent.cards.cooperation.description}
            listItems={contactContent.cards.cooperation.opportunities}
            note={contactContent.cards.cooperation.note}
          />
          <ContactCard_2
            title={contactContent.cards.social.title}
            description={contactContent.cards.social.description}
            listItems={contactContent.cards.social.platforms}
            
          />
        </div>
        {/* Render SocialButtons only once below the cards */}
        <div className="mt-8 flex justify-center">
                  </div>
      </div>
    </section>
  );
}
