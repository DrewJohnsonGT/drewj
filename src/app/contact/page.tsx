'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/components/ui/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/Form';
import { Input } from '~/components/ui/Input';
import { Textarea } from '~/components/ui/Textarea';
import { LINKED_IN_URL } from '~/constants';

const contactFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const form = useForm<ContactFormValues>({
    defaultValues: {
      email: '',
      message: '',
      name: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form. Please try again.');
      }

      form.reset();
      setSubmitSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                {form.formState.errors.name && <FormMessage />}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.email && <FormMessage />}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormDescription>
                  Please provide details about your inquiry.
                </FormDescription>
                <FormControl>
                  <Textarea placeholder="Your message" {...field} />
                </FormControl>
                {form.formState.errors.message && <FormMessage />}
              </FormItem>
            )}
          />

          {submitError && (
            <div className="text-sm font-medium text-destructive">
              {submitError}
            </div>
          )}

          {submitSuccess && (
            <div className="text-sm font-medium text-green-600">
              Thank you for your message! I&apos;ll get back to you soon.
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting || !form.formState.isValid}
            className="w-full"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <p className="text-xl">
        Reaching out and connecting on{' '}
        <a
          href={LINKED_IN_URL}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--linkedin)] hover:text-[var(--linkedinLight)]"
        >
          LinkedIn
        </a>{' '}
        is the best way to get a hold of me
      </p>

      <h3 className="mt-8 text-xl">Or send me a message here</h3>
      <div className="mt-8 w-full max-w-md">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
