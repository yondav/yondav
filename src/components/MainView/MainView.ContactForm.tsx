'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import tw, { theme } from 'twin.macro';

import { sendEmail } from '../../utils/util.sendEmail';
import { Button } from '../Button';
import * as Form from '../Form';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  profileImg: string;
}

export function ContactForm({ profileImg }: ContactFormProps) {
  const { register, handleSubmit, formState, reset } = useForm<ContactFormData>();

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      await sendEmail(data);
      reset();
    },
    [reset]
  );

  return (
    <Form.Base $grid onSubmit={handleSubmit(onSubmit)}>
      <Form.Group
        css={tw`flex justify-center items-center col-start-1 col-end-9 row-start-1 row-end-2 sm:(col-start-2 col-end-6) lg:(col-start-4 row-end-3 col-end-9 justify-end)`}
      >
        <Image
          width={0}
          height={0}
          sizes='100vw'
          src={profileImg}
          alt='yoni david'
          style={{
            width: '80%',
            height: 'auto',
            borderRadius: theme`borderRadius.md`,
          }}
        />
      </Form.Group>
      <Form.Group
        css={tw`col-start-1 row-start-2 col-end-9 row-end-3 lg:(row-start-1 row-end-2 col-end-4)`}
      >
        <Form.Label htmlFor='name'>Full Name</Form.Label>
        <Form.Input
          type='text'
          $error={!!formState.errors.name}
          {...register('name', { required: 'Must provide a full name' })}
        />
        <span css={tw`text-red-600 text-xs`}>{formState.errors.name?.message ?? ''}</span>
      </Form.Group>
      <Form.Group
        css={tw`col-start-1 row-start-3 col-end-9 row-end-4 lg:(row-start-2 col-end-4)`}
      >
        <Form.Label htmlFor='email'>Email Address</Form.Label>
        <Form.Input
          type='email'
          $error={!!formState.errors.email}
          {...register('email', { required: 'Must provide a valid email address' })}
        />
        <span css={tw`text-red-600 text-xs`}>
          {formState.errors.email?.message ?? ''}
        </span>
      </Form.Group>
      <Form.Group
        css={tw`col-start-1 col-end-9 row-start-4 row-end-5 lg:(row-start-3 row-end-4)`}
      >
        <Form.Label htmlFor='message'>Message</Form.Label>
        <Form.Textarea
          rows={4}
          $error={!!formState.errors.message}
          {...register('message', { required: 'Email body cannot be empty' })}
        />
        <span css={tw`text-red-600 text-xs`}>
          {formState.errors.message?.message ?? ''}
        </span>
      </Form.Group>
      <Form.Group css={tw`col-start-1 row-start-5 col-end-9 lg:row-start-4`}>
        <Button>Submit</Button>
      </Form.Group>
    </Form.Base>
  );
}
