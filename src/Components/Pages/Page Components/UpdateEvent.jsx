import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://keztfhsconadyzpjouyc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRmaHNjb25hZHl6cGpvdXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNTE5NDUsImV4cCI6MTk5MTkyNzk0NX0.Klp0MeA68AP0nNonvKmn1wDh_RZL-HoMtexKYUSaEB8"

const supabase = createClient(supabaseUrl, supabaseKey)

    const setData = (data) =>{
        let { user-id, date, title, location } = data;
        user_ID: document.getElementById('user-id').value,
        event_title: document.getElementById('event-title').value,
        event_date: document.getElementById('choose-date').value,
        event_location: document.getElementById('location').value,

    }