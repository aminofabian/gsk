import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // TODO: Replace with actual database queries
    const stats = [
      { 
        label: "CPD Points", 
        value: "150/200", 
        icon: "🎯",
        description: "Annual Target"
      },
      { 
        label: "Member Status", 
        value: "Specialist", 
        icon: "🏅",
        description: "MMed (Medicine)"
      },
      { 
        label: "Research", 
        value: "12", 
        icon: "🔬",
        description: "Publications"
      },
      { 
        label: "Procedures", 
        value: "523", 
        icon: "⚕️",
        description: "This Year"
      },
    ];

    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
} 