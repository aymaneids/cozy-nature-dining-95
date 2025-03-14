
import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const timeSlots = [
  "11:00 AM", "11:30 AM", 
  "12:00 PM", "12:30 PM", 
  "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM", 
  "5:00 PM", "5:30 PM", 
  "6:00 PM", "6:30 PM", 
  "7:00 PM", "7:30 PM", 
  "8:00 PM", "8:30 PM"
];

const Reservation: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log({
        name,
        email,
        phone,
        date,
        time,
        guests,
        specialRequests
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setName("");
        setEmail("");
        setPhone("");
        setDate(undefined);
        setTime(undefined);
        setGuests(2);
        setSpecialRequests("");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="reservation" className="py-20 bg-nature-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading">Make a Reservation</h2>
          <p className="section-subheading">
            Secure your table for a memorable dining experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium text-nature-800 mb-4">Reservation Confirmed!</h3>
              <p className="text-nature-600 mb-6">
                Thank you for choosing to dine with us. We've sent a confirmation to your email.
              </p>
              <p className="text-nature-600">
                Looking forward to serving you on{" "}
                {date && format(date, "EEEE, MMMM d")} at {time}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-cream-100 p-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-nature-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-nature-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-nature-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-nature-700 mb-2">
                    Number of Guests
                  </label>
                  <div className="flex items-center">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="rounded-l-lg rounded-r-none"
                    >
                      -
                    </Button>
                    <div className="px-4 py-2 border-t border-b border-cream-200 flex-1 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Users className="h-4 w-4 text-nature-600" />
                        <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.min(12, guests + 1))}
                      className="rounded-r-lg rounded-l-none"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-nature-700 mb-2">
                    Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "EEEE, MMMM d, yyyy") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block text-sm font-medium text-nature-700 mb-2">
                    Time
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !time && "text-muted-foreground"
                        )}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {time ? time : <span>Select time</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <div className="grid grid-cols-2 gap-2 p-3">
                        {timeSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "justify-start",
                              time === slot && "bg-nature-100 text-nature-900"
                            )}
                            onClick={() => {
                              setTime(slot);
                            }}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="special-requests" className="block text-sm font-medium text-nature-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="special-requests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-cream-200 focus:ring-2 focus:ring-nature-500/20 focus:border-nature-500 transition-colors"
                  rows={4}
                  placeholder="Allergies, dietary restrictions, special occasions, seating preferences..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
                disabled={isSubmitting || !date || !time}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Confirm Reservation"
                )}
              </button>
              
              <p className="text-sm text-center text-nature-600 mt-4">
                By making a reservation, you agree to our cancellation policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
