import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MessageCircle, Copy, Check } from 'lucide-react';
import { logEvent, EventCategories, EventActions } from '@/lib/analytics';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface WhatsappPopoverProps {
  children?: React.ReactNode;
}

export function WhatsappPopover({ children }: WhatsappPopoverProps) {
  const [copied, setCopied] = useState(false);
  const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopied(true);
    logEvent(
      EventCategories.SOCIAL,
      EventActions.COPY,
      'WhatsApp Number'
    );
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQRView = () => {
    logEvent(
      EventCategories.SOCIAL,
      EventActions.VIEW,
      'WhatsApp QR Code'
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild onClick={handleQRView}>
        {children || (
          <Button
            variant="outline"
            className="w-full justify-start"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent 
        className="w-80" 
        side="right"
        align="center"
        sideOffset={5}
      >
        <div className="space-y-4">
          <div className="flex justify-center">
            <OptimizedImage
              src="/whatsapp-qr.jpg" // Replace with your WhatsApp QR code image
              alt="WhatsApp QR Code"
              width={192}
              height={192}
              className="w-48 h-48 object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-sm text-muted-foreground whitespace-nowrap">WhatsApp:</span>
            <div className="flex items-center gap-1">
              <code className="text-sm">{whatsappNumber}</code>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="h-3 w-3 text-green-500" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}