export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  try {
    const tokenResponse = await fetch(
      'https://graph.facebook.com/v18.0/oauth/access_token?client_id=' + process.env.FACEBOOK_APP_ID + '&redirect_uri=' + (process.env.NEXT_PUBLIC_URL || 'https://saasgenerator.vercel.app') + '/login&client_secret=' + process.env.FACEBOOK_APP_SECRET + '&code=' + code
    );
    
    const tokenData = await tokenResponse.json();
    
    if (tokenData.error) {
      return res.status(400).json({ error: tokenData.error.message });
    }

    const userResponse = await fetch(
      'https://graph.facebook.com/v18.0/me?fields=id,name,email,picture.width(100)&access_token=' + tokenData.access_token
    );
    
    const userData = await userResponse.json();

    res.status(200).json({
      success: true,
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        picture: userData.picture
      },
      access_token: tokenData.access_token
    });
  } catch (error) {
    console.error('Facebook auth error:', error);
    res.status(500).json({ error: 'Failed to authenticate with Facebook' });
  }
}
