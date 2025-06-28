import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import type { ContactFormData, ApiResponse } from '@/types';

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send auto-reply email
    
    // For demo purposes, we'll just log the data
    console.log('Contact form submission:', validatedData);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We\'ll get back to you soon!',
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          message: error.errors[0].message,
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}