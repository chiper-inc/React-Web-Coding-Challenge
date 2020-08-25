export const getCase = async (category, pagination) => {
    const url = `https://bikewise.org:443/api/v2/incidents?page=${pagination}&per_page=10&occurred_after=1597036687&incident_type=theft&proximity_square=100&query=${encodeURI(category)}`;
    const resp = await fetch(url);
    const { incidents } = await resp.json();

    const caseIncidents = incidents.map(item => {
        return {
            id: item.id,
            title: item.title,
            description: item.description,
            dateTheft: item.occurred_at,
            dateReported: item.updated_at,
            location: item.address,
            url: item.media.image_url_thumb
        }
    });

    return caseIncidents;
}